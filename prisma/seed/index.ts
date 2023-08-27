import { PrismaClient } from "@prisma/client";
import tuteur from './tuteur';
import eleve from './eleve';
import prof from './prof';
import matiere from "./matiere";
import localisation from "./localisation";

const prisma = new PrismaClient()

async function runSeeds() {
    await prisma.$transaction(
        tuteur.map((tuteur) => 
            prisma.tuteur.upsert({
                where: { email: tuteur.email },
                update: {},
                create: tuteur[0],
            }),
        )
    )

    await Promise.all(
        matiere.map(async (matiere) => {
            await prisma.matiere.upsert({
                where: { id: matiere.id },
                update: {},
                create: matiere,
            })
        })
    )
    await Promise.all(
        localisation.map(async (localisation) =>
            await prisma.localisation.upsert({
                where: { id: localisation.id },
                update: {},
                create: localisation[0],
            })
        ),
    )
    await Promise.all(
        prof.map(async (prof) => {
            await prisma.prof.upsert({
                where: { id: prof.id },
                update: {},
                create: prof[0],
            })
        })
    )
    await Promise.all(
        eleve.map(async (eleve) => {
            await prisma.eleve.upsert({
                where: { id: eleve.id },
                update: {},
                create: eleve[0],
            })
        })
    )
    
}


runSeeds()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})