import react, { useState } from 'react'

function AddNewArtist({ onAddNewArtist }) {
    const [name, setName] = useState("")

    function handleSubmit(e) {

        e.preventDefault()

        const formData = {
            name: name,
        }

        fetch("http://localhost:9292/artists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((newArtist) => {
                onAddNewArtist(newArtist)
            })
    }

    return (
        <div className="new-artist-form">
            <h2>Add a New Artist</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholders="Artist Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Add Artist</button>
            </form>
        </div>

    )

}

export default AddNewArtist