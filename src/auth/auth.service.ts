import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthEntity } from './entity/auth.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypy from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}
    signup() {
        return {msg: 'I have signed up'};
    }

    async loginProf(email: string, password: string): Promise<AuthEntity> {
        const prof = await this.prisma.prof.findUnique({ where: { email: email } });
        if (!prof) {
            throw new NotFoundException(`No user found for email: ${email}`)
        }
        const isPassworValid = await bcrypy.compare(password, prof.password);
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
