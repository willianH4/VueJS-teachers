export interface ITeacher {
    teacherName: string;
    surname: string;
    dui: string | number;
    subjects: Array<string>;
    doc: boolean;
}