import React from 'react'

export default function Key() {
    const user = [
        {
            "id": 1,
            "name": "test1"
        },
        {
            "id": 2,
            "name": "test2"
        },
        {
            "id": 3,
            "name": "test3"
        },
        {
            "id": 4,
            "name": "test4"
        }
    ]
    return (
        <div>
            The List of the user ::
            <ul>
                {
                    user.map((i) => {
                        return (
                            <li key={i.id}>{i.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
