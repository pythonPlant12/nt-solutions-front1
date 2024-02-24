import { Hookable } from 'hookable';

type FamilyWeight = string | boolean | number | number[];
interface FamilyStyles {
    [style: string]: FamilyWeight;
}
interface Families {
    [family: string]: FamilyWeight | FamilyStyles;
}
interface GoogleFonts {
    families?: Families;
    display?: string;
    subsets?: string[] | string;
    text?: string;
}

declare function constructURL({ families, display, subsets, text }?: GoogleFonts): string | false;

interface FontInputOutput {
    inputFont: string;
    outputFont: string;
    inputText: string;
    outputText: string;
}
interface DownloadOptions {
    base64?: boolean;
    overwriting?: boolean;
    outputDir: string;
    stylePath: string;
    fontsDir: string;
    fontsPath: string;
    headers?: HeadersInit;
}
interface DownloaderHooks {
    'download:start': () => void;
    'download:complete': () => void;
    'download-css:before': (url: string) => void;
    'download-css:done': (url: string, content: string, fonts: FontInputOutput[]) => void;
    'download-font:before': (font: FontInputOutput) => void;
    'download-font:done': (font: FontInputOutput) => void;
    'write-css:before': (path: string, content: string, fonts: FontInputOutput[]) => void;
    'write-css:done': (path: string, newContent: string, oldContent: string) => void;
}
declare class Downloader extends Hookable<DownloaderHooks> {
    private url;
    private config;
    constructor(url: string, options?: Partial<DownloadOptions>);
    execute(): Promise<boolean>;
    private downloadFonts;
    private writeCss;
}

declare function download(url: string, options?: Partial<DownloadOptions>): Downloader;

declare function isValidURL(url: string): boolean;

declare function merge(...fonts: GoogleFonts[]): GoogleFonts;

declare function parse(url: string): GoogleFonts;

export { type DownloadOptions, Downloader, type DownloaderHooks, type Families, type FamilyStyles, type FamilyWeight, type FontInputOutput, type GoogleFonts, constructURL, download, isValidURL, merge, parse };
