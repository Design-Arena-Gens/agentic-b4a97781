export type Student = {
  id: string;
  fullName: string;
  birthDate: string;
  year: string;
  classGroup: string;
  guardians: string[];
  supportNeeds?: string;
  mealPlan: "chaud" | "froid" | "panier";
};

export type Teacher = {
  id: string;
  fullName: string;
  role: "titulaire" | "spécialiste";
  subjects: string[];
  workload: number;
  certifications: string[];
};

export type StaffMember = {
  id: string;
  fullName: string;
  department: "administration" | "parascolaire" | "nettoyage" | "cantine";
  contractType: "temps plein" | "mi-temps" | "temps partiel";
  hoursPerWeek: number;
};

export type Guardian = {
  id: string;
  fullName: string;
  relation: string;
  email: string;
  phone: string;
  address: string;
  students: string[];
};

export type CourseSlot = {
  id: string;
  weekday: string;
  start: string;
  end: string;
  subject: string;
  room: string;
  group: string;
  teacherId: string;
};

export type WorkSchedule = {
  id: string;
  staffId: string;
  weekday: string;
  start: string;
  end: string;
  location: string;
};

export type FinanceEntry = {
  id: string;
  period: string;
  type: "recette" | "dépense";
  label: string;
  amount: number;
  category: string;
  status: "prévu" | "confirmé" | "payé";
};

export type SupplyOrder = {
  id: string;
  supplier: string;
  description: string;
  quantity: number;
  unitCost: number;
  status: "en cours" | "reçu" | "retard";
  desiredDate: string;
};

export const students: Student[] = [
  {
    id: "eleve-001",
    fullName: "Alice Janssens",
    birthDate: "2014-03-12",
    year: "P4",
    classGroup: "4A",
    guardians: ["resp-001", "resp-002"],
    supportNeeds: "Logopédie 1x/semaine",
    mealPlan: "chaud"
  },
  {
    id: "eleve-002",
    fullName: "Moussa Ben Ali",
    birthDate: "2012-11-04",
    year: "P6",
    classGroup: "6B",
    guardians: ["resp-003"],
    mealPlan: "panier"
  },
  {
    id: "eleve-003",
    fullName: "Zoé Leroy",
    birthDate: "2016-08-25",
    year: "P2",
    classGroup: "2C",
    guardians: ["resp-004"],
    mealPlan: "froid"
  }
];

export const teachers: Teacher[] = [
  {
    id: "ens-001",
    fullName: "Nathalie Dubois",
    role: "titulaire",
    subjects: ["Français", "Mathématiques"],
    workload: 22,
    certifications: ["CAP", "Référent numérique"]
  },
  {
    id: "ens-002",
    fullName: "Laurent Peeters",
    role: "spécialiste",
    subjects: ["Éducation physique"],
    workload: 18,
    certifications: ["Brevet ADEPS", "Premiers secours"]
  },
  {
    id: "ens-003",
    fullName: "Fatima El Amrani",
    role: "titulaire",
    subjects: ["Découverte du monde", "Français"],
    workload: 24,
    certifications: ["CAP"]
  }
];

export const staff: StaffMember[] = [
  {
    id: "pers-001",
    fullName: "Sophie Legrand",
    department: "administration",
    contractType: "temps plein",
    hoursPerWeek: 38
  },
  {
    id: "pers-002",
    fullName: "Patrick Van den Broeck",
    department: "nettoyage",
    contractType: "temps partiel",
    hoursPerWeek: 20
  },
  {
    id: "pers-003",
    fullName: "Inès Beaumont",
    department: "cantine",
    contractType: "mi-temps",
    hoursPerWeek: 24
  }
];

export const guardians: Guardian[] = [
  {
    id: "resp-001",
    fullName: "Jean Janssens",
    relation: "Père",
    email: "jean.janssens@example.com",
    phone: "+32 478 11 22 33",
    address: "Rue des Tilleuls 14, 5000 Namur",
    students: ["eleve-001"]
  },
  {
    id: "resp-002",
    fullName: "Claire Janssens",
    relation: "Mère",
    email: "claire.janssens@example.com",
    phone: "+32 497 98 76 54",
    address: "Rue des Tilleuls 14, 5000 Namur",
    students: ["eleve-001"]
  },
  {
    id: "resp-003",
    fullName: "Amel Ben Ali",
    relation: "Mère",
    email: "amel.benali@example.com",
    phone: "+32 485 55 70 13",
    address: "Avenue des Cerisiers 8, 1030 Bruxelles",
    students: ["eleve-002"]
  },
  {
    id: "resp-004",
    fullName: "Paul Leroy",
    relation: "Père",
    email: "paul.leroy@example.com",
    phone: "+32 474 44 33 22",
    address: "Rue du Parc 32, 4000 Liège",
    students: ["eleve-003"]
  }
];

export const courseSlots: CourseSlot[] = [
  {
    id: "slot-001",
    weekday: "Lundi",
    start: "08:30",
    end: "09:20",
    subject: "Français",
    room: "Salle 12",
    group: "4A",
    teacherId: "ens-001"
  },
  {
    id: "slot-002",
    weekday: "Lundi",
    start: "10:30",
    end: "11:20",
    subject: "Éducation physique",
    room: "Gymnase",
    group: "6B",
    teacherId: "ens-002"
  },
  {
    id: "slot-003",
    weekday: "Mardi",
    start: "13:30",
    end: "14:20",
    subject: "Découverte du monde",
    room: "Salle 4",
    group: "2C",
    teacherId: "ens-003"
  }
];

export const workSchedules: WorkSchedule[] = [
  {
    id: "work-001",
    staffId: "pers-001",
    weekday: "Lundi",
    start: "08:00",
    end: "16:00",
    location: "Bureau administratif"
  },
  {
    id: "work-002",
    staffId: "pers-002",
    weekday: "Mercredi",
    start: "17:00",
    end: "20:00",
    location: "Bâtiment principal"
  },
  {
    id: "work-003",
    staffId: "pers-003",
    weekday: "Vendredi",
    start: "10:00",
    end: "15:00",
    location: "Cantine"
  }
];

export const financeEntries: FinanceEntry[] = [
  {
    id: "fin-001",
    period: "T2 2024",
    type: "recette",
    label: "Subside pédagogique",
    amount: 12500,
    category: "Subsides",
    status: "confirmé"
  },
  {
    id: "fin-002",
    period: "T2 2024",
    type: "dépense",
    label: "Facture chauffage mars",
    amount: 2875,
    category: "Infrastructures",
    status: "payé"
  },
  {
    id: "fin-003",
    period: "T3 2024",
    type: "dépense",
    label: "Journée pédagogique",
    amount: 950,
    category: "Animation",
    status: "prévu"
  }
];

export const supplyOrders: SupplyOrder[] = [
  {
    id: "ord-001",
    supplier: "Papeterie BelOffice",
    description: "Cahiers lignés A4",
    quantity: 200,
    unitCost: 1.8,
    status: "en cours",
    desiredDate: "2024-05-30"
  },
  {
    id: "ord-002",
    supplier: "Sportline",
    description: "Ballons de basket taille 6",
    quantity: 12,
    unitCost: 19.5,
    status: "reçu",
    desiredDate: "2024-04-10"
  },
  {
    id: "ord-003",
    supplier: "CuisinePro",
    description: "Assiettes en inox",
    quantity: 60,
    unitCost: 6.2,
    status: "retard",
    desiredDate: "2024-05-05"
  }
];
