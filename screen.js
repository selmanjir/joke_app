class Screen {
    constructor() {
        this.jokeBtn = document.getElementById('get');
        this.jokeBtn.addEventListener('click', () => this.sakaGetir());
    }

    async sakaGetir() {
        const randomImage = await new UnsplashApi().getRandomImage();
        const randomJoke = await new JokeApi().getRandomJoke();

        const allResults = {
            randomImage,
            randomJoke
        }

        this.getResults(allResults);
    }

    getResults(results) {
        document.querySelector('.sonuc').innerHTML = ` <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${results.randomImage}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-4">${results.randomJoke}</p>
            </div>
          </div>
        </div>
      </div>`;
    }
}