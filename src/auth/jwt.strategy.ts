import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ProfService } from "src/prof/prof.service";
import { jwtSecret } from "./auth.module";
import { TuteurService } from "src/tuteur/tuteur.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        private profService: ProfService,
        private tuteurService: TuteurService,
        ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret,
        })}

    async validate(payload: { userId: number }) {
        const prof = await this.profService.findOne(payload.userId);
        const tuteur = await this.tuteurService.findOne(payload.userId);
        if (!prof  || !tuteur) {
            throw new UnauthorizedException();
        }
        return prof || tuteur;
        }
    }
