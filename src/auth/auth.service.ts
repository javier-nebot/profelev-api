import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthEntity } from './entity/auth.entity';
import { AuthDto } from './dto/auth.dto'
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { ProfService } from 'src/prof/prof.service';
import { TuteurService } from 'src/tuteur/tuteur.service';
import { CreateProfDto } from 'src/prof/dto/create-prof.dto';
import { CreateTuteurDto } from 'src/tuteur/dto/create-tuteur.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
        private profService: ProfService,
        private tuteurService: TuteurService) {}

    public async signupProf(registrationProf: CreateProfDto) {
        try {
            const hashedPassword = await bcrypt.hash(
                registrationProf.password,
                10,
            )
            const createdProf = await this.profService.create({
                ...registrationProf,
                password: hashedPassword,
            })
            return createdProf
        } catch (error) {
            if (error?.code === '23505') {
                throw new HttpException(
                    'Prof avec cet email, exist',
                    HttpStatus.BAD_REQUEST,
                )
            }
            throw new HttpException(
                `error: ${error}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    public async signupTuteur(registrationTuteur: CreateTuteurDto) {
        try {
            const hashedPassword = await bcrypt.hash(
                registrationTuteur.password,
                10,
            )
            const createdTuteur = await this.tuteurService.create({
                ...registrationTuteur,
                password: hashedPassword,
            })
            return createdTuteur
        } catch (error) {
            if (error?.code === '23505') {
                throw new HttpException(
                    'Tuteur avec cet email, exist',
                    HttpStatus.BAD_REQUEST,
                )
            }
            throw new HttpException(
                `error: ${error}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    async loginProf(email: string, password: string): Promise<AuthEntity> {
        const prof = await this.prisma.prof.findUnique({ where: { email: email } });
        if (!prof) {
            throw new NotFoundException(`No user found for email: ${email}`)
        }
        const isPassworValid = await bcrypt.compare(password, prof.password);
        if(!isPassworValid) {
            throw new UnauthorizedException('Invalid password');
        }
        return {
            accessToken: this.jwtService.sign({ userId: prof.id}),
        }
    }

    async loginTuteur(email: string, password: string): Promise<AuthEntity> {
        const tuteur = await this.prisma.tuteur.findUnique({ where: { email: email } });
        if (!tuteur) {
            throw new NotFoundException(`No user found for email: ${email}`)
        }
        const isPassworValid = tuteur.password === password;
        if(!isPassworValid) {
            throw new UnauthorizedException('Invalid password');
        }
        return {
            accessToken: this.jwtService.sign({ userId: tuteur.id}),
        }
    }
}
