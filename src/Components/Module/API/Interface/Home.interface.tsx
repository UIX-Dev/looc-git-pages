
interface IHomeIntro {
    image: string
    video: string
}
interface IHomeContents {
    main: string
    worker: string
    work: string[]
    title: string[]
    description: string[]
}
interface IIntroSpace {
    dir: string; //right or left
    mainSrc: string;
    worker: string;
    works: string[];
    title: string[];
    description: string[];
}

export type {
    IHomeIntro,
    IHomeContents,
    IIntroSpace
};
