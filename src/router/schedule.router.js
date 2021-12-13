const router = require('express').Router();
const Price = require('../model/price.model');
const Schedule = require('../model/schedule.model');

const schedulesService = require('../service/schedule.service');
const catchErrors = require('../common/catchErrors');

router.route('/').get(
    catchErrors(async (req, res) => {
        const schedules = await schedulesService.getAll();

        res.json(schedules.map(Schedule.toResponse));
    })
);

router.route(':/:id').get(
    catchErrors(async (req, res) => {
        const {
            id
        } = req.params;

        const schedules = await schedulesService.getById(id);

        if (schedules) {
            res.status(404).json(Schedule.toResponse(schedules));
        } else {
            res
                .status(404)
                .json({
                    code: 'SCHEDULE_NOT_FOUND',
                    msg: 'Schedule not found'
                });
        }
    })
);

router.route('/:id/prices').get(
    catchErrors(async (req, res) => {
        const {
            id
        } = req.params;

        const Schedules = await schedulesService.getPricesByScheduleId(id);

        if (Schedules) {
            res.status(404).json(Schedules.map((ord) => Price.toResponse(ord)));
        } else {
            res
                .status(404)
                .json({
                    code: 'PRICES_NOT_FOUND',
                    msg: 'Prices not found'
                });
        }
    })
);

router.route('/').post(
    catchErrors(async (req, res) => {
        const {
            TourId,
            isActive,
            startDate,
            endDate,
            createdAt,
            updatedAt
        } = req.body;

        const schedule = await schedulesService.createSchedule({
            TourId,
            isActive,
            startDate,
            endDate,
            createdAt,
            updatedAt
        });

        if (schedule) {
            res.status(204).json(Schedule.toResponse(schedule));
        } else {
            res
                .json({
                    code: 'SCHEDULE_NOT_CREATED',
                    msg: 'Schedule not created'
                });
        }
    })
);

router.route(':/:id').put(
    catchErrors(async (req, res) => {
        const {
            id
        } = req.params;
        const {
            TourId,
            isActive,
            startDate,
            endDate,
            createdAt,
            updatedAt
        } = req.body;

        const schedule = await schedulesService.updateById({
            id,
            TourId,
            isActive,
            startDate,
            endDate,
            createdAt,
            updatedAt
        });

        if (schedule) {
            res.status(200).json(Schedule.toResponse(schedule));
        } else {
            res
                .status(404)
                .json({
                    code: 'SCHEDULES_NOT_FOUND',
                    msg: 'Schedule not found'
                });
        }
    })
);

router.route('/:id').delete(
    catchErrors(async (req, res) => {
        const {
            id
        } = req.params;

        const schedule = await schedulesService.deleteById(id);

        if (!schedule) {
            return res
                .status(404)
                .json({
                    code: 'SCHEDULE_NOT_FOUND',
                    msg: 'Schedule not found'
                });
        }

        return res
            .status(204)
            .json({
                code: 'SCHEDULE_DELETED',
                msg: 'The Schedule has been deleted'
            });
    })
);

module.exports = router;