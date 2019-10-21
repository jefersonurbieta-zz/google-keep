export default class PaginatedSearchBO {
    constructor (model) {
        this.model = model
    }

    async findAll ({ page, size, sort, direction, criteria, populate }) {
        const skip = (page - 1) * size
        const content = await this.getPage({ skip, size, sort, direction, criteria, populate })
        const totalElements = await this.getTotalElements(criteria)
        const pages = await this.countPages(totalElements, size)
        return { content, pages, page, size, totalElements }
    }

    async getPage ({ skip, size, sort, direction, criteria, populate }) {
        return this.model.find(criteria)
            .skip(skip)
            .limit(size)
            .sort({ [sort]: direction })
            .populate(populate)
    }

    async getTotalElements (criteria) {
        return this.model.count(criteria)
    }

    async countPages (totalElements, size) {
        let pages = Math.trunc(totalElements / size)
        if (pages < 1) {
            pages = 1
        } else if (totalElements % size) {
            pages = pages + 1
        }
        return pages
    }
}
