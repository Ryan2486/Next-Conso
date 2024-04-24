// sortie.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type SortieType = {
  ID_sortie: number ;
  Date_sortie: Date ;
  Qte_sortie: number ;
  ID_consommable: string ;
  ID_service: number ;
};

class Sortie {
  ID_sortie: number | null;
  Date_sortie: Date | null;
  Qte_sortie: number | null;
  ID_consommable: string | null;
  ID_service: number | null;

  constructor(sortie: SortieType | {}) {
    this.ID_sortie = sortie.ID_sortie || null;
    this.Date_sortie = new Date(sortie.Date_sortie as string) || null;
    this.Qte_sortie = parseFloat(sortie.Qte_sortie as any) || null;
    this.ID_consommable = sortie.ID_consommable || null;
    this.ID_service = parseInt(sortie.ID_service as any) || null;
  }

  async GetAll(): Promise<sortie[]> {
    try {
      const sorties = await prisma.sortie.findMany({
        include: {
          consommable: true,
          service: true,
        },
      });
      return sorties;
    } catch (error) {
      throw new Error(`Erreur N°: ${error.code}`);
    }
  }

  async Add(sortie: sortie): Promise<number | null> {
    try {
      const rep = await prisma.sortie.create({
        data: sortie,
      });
      return rep.ID_sortie; // Retourne l'ID de la sortie ajoutée
    } catch (error) {
      throw new Error(`Erreur N°: ${error.code}`);
    }
  }

  async Update(sortie: sortie): Promise<sortie> {
    try {
      const rep = await prisma.sortie.update({
        where: {
          ID_sortie: sortie.ID_sortie,
        },
        data: sortie,
      });
      return rep;
    } catch (error) {
      throw new Error(`Erreur N°: ${error.code}`);
    }
  }

  async delete(ID_sortie: number): Promise<sortie> {
    try {
      const rep = await prisma.sortie.delete({
        where: { ID_sortie },
      });
      return rep;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error(`La sortie avec l'ID '${ID_sortie}' n'existe pas`);
      }
      throw new Error(`Erreur N°: ${error.code}`);
    }
  }
}

export default Sortie;
