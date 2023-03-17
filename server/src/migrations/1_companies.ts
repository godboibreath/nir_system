import Logger from '../modules/logger.module';
import Company from '../models/Company.model';

const Apple = new Company({
    name: 'Apple',
    userRate: null,
    parserOptions: [
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=smartfony-205&page={pageValue}',
            pagesCount: 13,
            selector: '.value.ng-star-inserted',
        },
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=apple-watch-2947&page={pageValue}',
            pagesCount: 14,
            selector: '.value.ng-star-inserted',
        },
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=zaryadnye-ustroistva-258&page={pageValue}',
            pagesCount: 1,
            selector: '.value.ng-star-inserted',
        },
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=naushniki-3967&page={pageValue}',
            pagesCount: 1,
            selector: '.value.ng-star-inserted',
        },
        {
            link: 'https://www.mvideo.ru/product-list-page?q=apple&category=noutbuki-118&page={pageValue}',
            pagesCount: 8,
            selector: '.value.ng-star-inserted',
        },
    ],
});

const Samsung = new Company({
    name: 'Samsung',
    userRate: null,
    parserOptions: [
        {
            link: 'https://www.mvideo.ru/brand/samsung-13/f/page={pageValue}',
            pagesCount: 244,
            selector: '.fl-product-tile-rating__stars-value',
        },
    ],
});

const Lenovo = new Company({
    name: 'Lenovo',
    userRate: null,
    parserOptions: [
        {
            link: 'https://www.mvideo.ru/brand/lenovo-1006/f/page={pageValue}',
            pagesCount: 33,
            selector: '.fl-product-tile-rating__stars-value',
        },
    ],
});

const Xiaomi = new Company({
    name: 'Xiaomi',
    userRate: null,
    parserOptions: [
        {
            link: 'https://www.mvideo.ru/brand/xiaomi-1083/f/page={pageValue}',
            pagesCount: 52,
            selector: '.fl-product-tile-rating__stars-value'
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
            Logger.info('Companies migration has passed');
        } catch (error) {
            Logger.warning(`Companies migration have not completed: ${error.message}`);
        }
    },
    id: 0,
};
