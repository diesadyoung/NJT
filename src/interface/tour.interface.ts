export interface IBaseTour
{
    title: string,
    isActive: boolean,
    slug: string,
    description: string,
    createdAt: Date,
    updatedAt: Date
};

export interface IBaseTourPartial extends  Partial<IBaseTour>
{

}
export interface ITour extends IBaseTour {
    id: string;
}

export interface IBaseTourResponse extends Partial<IBaseTour> {
    id: string;
}