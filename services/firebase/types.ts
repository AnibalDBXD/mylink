export interface IUser {
    id: string;
}

export interface ILink {
    backgroundColor: string;
    href: string;
    name: string;
}

export interface IDocument {
    header: {
        description: string;
        name: string;
    }
    links: ILink[]
}