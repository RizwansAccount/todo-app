import mongoose from "mongoose";

const schemaStructure = {
    note : { type : String, required : true, },
};

const schema = new mongoose.Schema(schemaStructure, { timestamps : true });
const model = mongoose.model('Note', schema);

export const NoteModel = model;