
import { z } from 'zod';

export const intencaoSchema = z.object({

    intent: z.enum([
        'agendar',
        'cancelar',
        'desconhecida'
    ]),

    professionalId: z.string().nullable(),

    professionalName: z.string().nullable(),

    specialty: z.string().nullable(),

    dateTime: z.string().nullable(),

    reason: z.string().nullable(),

});
