import tourRepo from '../repository/tour.memory.repository';
//import scheduleRepo from '../repository/schedule.memory.repository';
//import pricesRepo from '../repository/price.memory.repository';

import {IBaseTour, ITour} from '../interface/tour.interface';
//import {} from '';

const getAll = async ():Promise<ITour[]> => tourRepo.getAll();

const getById = async (id: string): Promise<ITour | null> => tourRepo.getById(id);

//const getSchedulesByTourId = async (id:string): Promise<I | null> => scheduleRepo.getSchedulesByTourId(id);

const createTour = async (tour: IBaseTour): Promise<ITour> => tourRepo.createTour(tour);

const updateById = async (tour: IBaseTour): Promise<ITour | null>  => tourRepo.updateById(tour);

const deleteById = async (id: string): Promise<ITour | null> =>
{
    const tourDeletable = await getById(id);
    await tourRepo.deleteById(id);
    await scheduleRepo.deleteByTourId(id);
    const schedule = scheduleRepo.getOrdersByDelTourId(id)
    schedule.map((i) => pricesRepo.deleteByScheduleId(i.id))
    return tourDeletable;
};

export default
{
    getAll,
    getById,
    getSchedulesByTourId,
    createTour,
    updateById,
    deleteById
};