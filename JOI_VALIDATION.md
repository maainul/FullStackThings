# JOI VALIDATION 

## Install :  npm i joi

import Joi from "joi";

```.js
const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });
const vehicleSchema = Joi.object({
    vehicleModel: Joi.string().min(3).max(30).required(),
    vehicleColor: Joi.string().required(),
    vehicleNumber:Joi.string().required(),
    driverName:Joi.string().required(),
    driverMobileNumber:Joi.number().required(),
    driverAddress:Joi.string().required(),
    numberOfPassenger:Joi.number().required(),
    referencePeopleName:Joi.string().required(),
    visitingPurpose:Joi.string().required(),
    tokenNumber:Joi.string().required(),
});

export const validateVehicle = validator(vehicleSchema);

```
# 2. Update Controller :

```js
import VehicleModel from "../model/vehicleModel.js";
import { validateVehicle } from '../validation/validator.js';

export const vehicleEntryController = async (req, res) => {
    try {
        const { error, value } = validateVehicle(req.body);
        if (error) {
            const formattedErrors = error.details.map(detail => {
                return {
                    label: detail.context.label,
                    message: detail.message.replace(/"/g, '')
                };
            });

            return res.status(400).json({
                success: false,
                error: formattedErrors
            });
        }

        const newVehicle = await VehicleModel.create(value);
        res.status(201).json({ success: true, newVehicle });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getVehiclesController = async (req, res) => {
    try {
        const data = await VehicleModel.find();
        console.error('Get All Vehicle:', data);
        return res.status(200).json({
            success: true,
            message: 'Vehicle List',
            data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error In Get All Vehicle List',
            error: error.message || error,
        });
    }
};

```


```json
{
    "success": false,
    "error": [
        {
            "label": "vehicleModel",
            "message": "vehicleModel is not allowed to be empty"
        },
        {
            "label": "vehicleColor",
            "message": "vehicleColor is not allowed to be empty"
        },
        {
            "label": "driverMobileNumber",
            "message": "driverMobileNumber must be a number"
        }
    ]
}
```


