import { Schema, model } from 'mongoose';

const LinkSchema = new Schema({
    link: {
        type: String,
        required: true,
    },
    pagesCount: {
        type: Number,
        required: true,
    },
    selector: {
        type: String,
        required: true,
    },
});

const CompanySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    userRate: {
        type: Number,
    },
    parserOptions: [LinkSchema],
});

const Company = model('Company', CompanySchema);

export default Company;
