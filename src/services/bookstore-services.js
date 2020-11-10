export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'The history of the Russian Goverment',
                author: 'Boris Akunin'
            },
            {
                id: 2,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler'
            }
        ];
    }
}