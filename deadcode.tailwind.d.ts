declare module 'myModule' {
    interface AddUtilities {
        (utilities: { [key: string]: { [property: string]: string } }): void;
    }

    interface Options {
        addUtilities: AddUtilities;
    }

    export default function myModule(options: Options): void;
}