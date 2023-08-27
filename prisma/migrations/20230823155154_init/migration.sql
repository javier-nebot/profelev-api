-- CreateTable
CREATE TABLE "Prof" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "diplome" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "idLocalisation" INTEGER NOT NULL,

    CONSTRAINT "Prof_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tuteur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "relationEleve" TEXT NOT NULL,
    "idLocalisation" INTEGER NOT NULL,

    CONSTRAINT "Tuteur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eleve" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "idTuteur" INTEGER NOT NULL,

    CONSTRAINT "Eleve_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matiere" (
    "id" SERIAL NOT NULL,
    "matiere" TEXT NOT NULL,
    "cours" TEXT NOT NULL,

    CONSTRAINT "Matiere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Localisation" (
    "id" SERIAL NOT NULL,
    "adresse" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "departement" TEXT NOT NULL,
    "codePostal" TEXT NOT NULL,
    "lat" INTEGER NOT NULL,
    "long" INTEGER NOT NULL,
    "idTuteur" INTEGER NOT NULL,
    "idProf" INTEGER NOT NULL,

    CONSTRAINT "Localisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solliciter" (
    "idTuteur" INTEGER NOT NULL,
    "idMatiere" INTEGER NOT NULL,

    CONSTRAINT "Solliciter_pkey" PRIMARY KEY ("idTuteur","idMatiere")
);

-- CreateTable
CREATE TABLE "Enseigner" (
    "idProf" INTEGER NOT NULL,
    "idEleve" INTEGER NOT NULL,
    "idMatiere" INTEGER NOT NULL,
    "rendezvous" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enseigner_pkey" PRIMARY KEY ("idProf","idEleve","idMatiere")
);

-- CreateTable
CREATE TABLE "Maitriser" (
    "idProf" INTEGER NOT NULL,
    "idMatiere" INTEGER NOT NULL,

    CONSTRAINT "Maitriser_pkey" PRIMARY KEY ("idProf","idMatiere")
);

-- CreateTable
CREATE TABLE "Contacter" (
    "idProf" INTEGER NOT NULL,
    "idTuteur" INTEGER NOT NULL,

    CONSTRAINT "Contacter_pkey" PRIMARY KEY ("idProf","idTuteur")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prof_id_key" ON "Prof"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Prof_telephone_key" ON "Prof"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Prof_email_key" ON "Prof"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tuteur_id_key" ON "Tuteur"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tuteur_telephone_key" ON "Tuteur"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Tuteur_email_key" ON "Tuteur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Eleve_id_key" ON "Eleve"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Matiere_id_key" ON "Matiere"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Localisation_id_key" ON "Localisation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Localisation_departement_key" ON "Localisation"("departement");

-- CreateIndex
CREATE UNIQUE INDEX "Localisation_codePostal_key" ON "Localisation"("codePostal");

-- AddForeignKey
ALTER TABLE "Eleve" ADD CONSTRAINT "Eleve_idTuteur_fkey" FOREIGN KEY ("idTuteur") REFERENCES "Tuteur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Localisation" ADD CONSTRAINT "Localisation_idTuteur_fkey" FOREIGN KEY ("idTuteur") REFERENCES "Tuteur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Localisation" ADD CONSTRAINT "Localisation_idProf_fkey" FOREIGN KEY ("idProf") REFERENCES "Prof"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solliciter" ADD CONSTRAINT "Solliciter_idTuteur_fkey" FOREIGN KEY ("idTuteur") REFERENCES "Tuteur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solliciter" ADD CONSTRAINT "Solliciter_idMatiere_fkey" FOREIGN KEY ("idMatiere") REFERENCES "Matiere"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enseigner" ADD CONSTRAINT "Enseigner_idProf_fkey" FOREIGN KEY ("idProf") REFERENCES "Prof"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enseigner" ADD CONSTRAINT "Enseigner_idEleve_fkey" FOREIGN KEY ("idEleve") REFERENCES "Eleve"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enseigner" ADD CONSTRAINT "Enseigner_idMatiere_fkey" FOREIGN KEY ("idMatiere") REFERENCES "Matiere"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maitriser" ADD CONSTRAINT "Maitriser_idProf_fkey" FOREIGN KEY ("idProf") REFERENCES "Prof"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maitriser" ADD CONSTRAINT "Maitriser_idMatiere_fkey" FOREIGN KEY ("idMatiere") REFERENCES "Matiere"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contacter" ADD CONSTRAINT "Contacter_idProf_fkey" FOREIGN KEY ("idProf") REFERENCES "Prof"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contacter" ADD CONSTRAINT "Contacter_idTuteur_fkey" FOREIGN KEY ("idTuteur") REFERENCES "Tuteur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
