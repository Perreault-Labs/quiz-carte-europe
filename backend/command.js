const country = {
    "Portugal": "F",
    "Islande": "A",
    "Belgique": "I",
    "Allemagne": "L",
    "Bulgarie": "W",
    "Royaume-Uni": "E",
    "Suède": "B",
    "Lituanie": "O",
    "Espagne": "G",
    "Grèce": "X",
    "Italie": "M",
    "Finlande": "C",
    "Ukraine": "Q",
    "Russie": "V",
    "Pays-Bas": "J",
    "République tchèque": "U",
    "Serbie": "S",
    "Roumanie": "R",
    "Danemark": "K",
    "Autriche": "T",
    "France": "H",
    "Croatie": "Y",
    "Pologne": "N",
    "Hongrie": "Z"
  }
  
  const capitals = {
    "Varsovie": 16,
    "Rome": 12,
    "Belgrade": 24,
    "Berne": 11,
    "Bruxelles": 6,
    "Vienne": 14,
    "Oslo": 2,
    "Prague": 15,
    "Madrid": 9,
    "Minsk": 19,
    "Sarajevo": 13,
    "Paris": 5,
    "Helsinki": 4,
    "Londres": 1
  }

  import { PrismaClient } from '@prisma/client';
  
  
  const prisma = new PrismaClient();

  console.log(await prisma.user.findMany())

  //Country id: 7b2a5d83-c7d3-40b0-a9dc-b3b223ec268a
  //Capitals id: 89468acb-f108-4b06-9b72-7ba0c6f400ab