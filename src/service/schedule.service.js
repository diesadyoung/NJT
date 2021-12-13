const scheduleRepo = require('../repository/schedule.memory.repository');
const pricesRepo = require('../repository/price.memory.repository');

const getAll = () => scheduleRepo.getAll();

const getById = (id) => scheduleRepo.getById(id);

const getPricesByScheduleId = (id) => pricesRepo.getPricesByScheduleId(id);

const createSchedule = ({
                            id,
                            Tourid,
                            isActive,
                            startDate,
                            endDate,
                            createdAt,
                            updatedAt
                        }) => scheduleRepo.createSchedule({
    id,
    Tourid,
    isActive,
    startDate,
    endDate,
    createdAt,
    updatedAt
});

const updateById = async (id) => ({
                                      consumerId,
                                      Tourid,
                                      isActive,
                                      startDate,
                                      endDate,
                                      createdAt,
                                      updatedAt
                                  }) => scheduleRepo.updateById({
    id,
    Tourid,
    isActive,
    startDate,
    endDate,
    createdAt,
    updatedAt
});

const deleteById = async (id) => {
    const scheduleDeletable = await getById(id);
    scheduleRepo.deleteById(id);
    pricesRepo.deleteByScheduleId(id);
    return scheduleDeletable;
}


module.exports = {
    getAll,
    getById,
    getPricesByScheduleId,
    createSchedule,
    updateById,
    deleteById
}