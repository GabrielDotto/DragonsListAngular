export class Helper {

    public static estaEmBranco(valor: any): boolean {
        return valor === undefined || valor === null || valor === '';
    }
}