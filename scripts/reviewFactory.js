console.log("review factory")

const reviewId = function* () {
    let id = 1
    while (true) {
        yield id
        id ++
    }
}

const reviewIdGenerator = reviewId()

const reviewFactory = (review) => {
    return Object.create(null, {
        "id": {
            value: reviewIdGenerator.next().value,
            enumerable: true
            },
        "review": {
            value: review,
            enumerable: true
            }
        }
    )
}

module.exports = reviewFactory