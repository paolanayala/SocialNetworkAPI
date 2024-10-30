import { Schema, model, type Document } from 'mongoose';

interface IThought extends Document {
    thoughtText: string,
    createdAt: string,
    username: string,
    reactions: reactionSchema[],
}

