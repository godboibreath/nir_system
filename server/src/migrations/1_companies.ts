import Logger from '../modules/logger.module';
import Company from '../models/Company.model';

const Apple = new Company({
    name: 'Apple',
    userRate: null,
    parserOptions: [
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=smartfony-205&page={pageValue}',
            pagesCount: 4,
        },
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=apple-watch-2947&page={pageValue}',
            pagesCount: 25,
        },
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=zaryadnye-ustroistva-258&page={pageValue}',
            pagesCount: 1,
        },
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=naushniki-3967&page={pageValue}',
            pagesCount: 1,
        },
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=noutbuki-118&page={pageValue}',
            pagesCount: 2,
        },
    ],
});

const Samsung = new Company({
    name: 'Samsung',
    userRate: null,
    parserOptions: [
        {
            link: 'https://www.mvideo.ru/brand/samsung-13/f/page={pageValue}"',
            pagesCount: 171,
        },
    ],
});

const Lenovo = new Company({
    name: 'Lenovo',
    userRate: null,
    parserOptions: [
        {
            link: 'https://www.mvideo.ru/brand/lenovo-1006/f/page={pageValue}',
            pagesCount: 34,
        },
    ],
});

const Xiaomi = new Company({
    name: 'Xiaomi',
    userRate: null,
    parserOptions: [
        {
            link: 'https://www.mvideo.ru/brand/xiaomi-1083/f/page={pageValue}',
            pagesCount: 32,
        },
    ],
});

export default {
    migration: async () => {
        try {
            await Apple.save();
            await Samsung.save();
            await Lenovo.save();
            await Xiaomi.save();
        } catch (error) {
            Logger.warning(`Companies migration have not completed: ${error.message}`);
        }
    },
    id: 0,
};
