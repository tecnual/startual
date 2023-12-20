export interface Config {
   title: string;
   sections: Section[];
   display: string;
}

export interface Section {
    name: string;
    type?: string;
    icon?: string;
    logo?: string;
    order: number;
    items?: Item[];
}

export interface Item {
  title: string;
  subtitle?: string;
  description?: string;
  url: string;
  icon?: string;
  logo?: string;
}
