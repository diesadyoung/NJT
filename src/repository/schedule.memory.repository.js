const Schedule = require('../model/schedule.model')
const pricesRepo = require('./price.memory.repository');

const Schedules = [new Schedule()];

const getAll = async () => Schedules;

const getById = async (id) => Schedules.find((schedule) => schedule.id === id);

const getSchedulesByTourId = async (tourId) => {
    const schedules = Schedules.filter((schedule) => schedule.tourId === tourId);
    return schedules;
}

const createSchedule = async ({
    tourId,
    date,
    deliveryTime
}) => {
    const schedule = new Schedule({
        tourId,
        date,
        deliveryTime
    })
    Schedules.push(schedule);
    return schedule;
}

const updateById = async (id) => ({
    tourId,
                                      isActive,
                                      startDate,
                                      endDate,
                                      createdAt,
                                      updatedAt
}) => {
    const schedulePos = Schedules.findIndex((schedule) => schedule.id === id);

    if (schedulePos === -1) return null;

    const oldSchedule = Schedules[schedulePos];

    const newSchedule = {
        ...oldSchedule,
        tourId,
        isActive,
        startDate,
        endDate,
        createdAt,
        updatedAt
    };

    Schedules.splice(schedulePos, 1, newSchedule);
    return newSchedule;
}

const deleteById = async (id) => {
    const schedulePos = Schedules.findIndex((schedule) => schedule.id === id);

    if (schedulePos === -1) return null;

    const scheduleDeletable = Schedules[schedulePos];

    Schedules.splice(schedulePos, 1);
    return scheduleDeletable;
}

const deleteByTourId = async (tourId) => {
    const schedules = Schedules.filter((schedule) => schedule.tourId === tourId);

    await Promise.allSettled(schedules.map(async (schedule) => {
        deleteById(schedule.id);
        pricesRepo.deleteByTourId(schedule.id);
    }))
}

module.exports = {
    Schedules: Schedules,
    getAll,
    getById,
    getSchedulesByTourId,
    createSchedule,
    updateById,
    deleteById,
    deleteByTourId
}