function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

const createFeeds = () => {
	let amountOfFeeds = getRandomInt(80, 200)
	console.log(`create ${amountOfFeeds} Feeds`)
	let feeds = document.querySelectorAll('[data-id=feed]')
	if (feeds) {
		for (let x = 0; x < feeds.length; x++) {
			for (let i = 0; i < amountOfFeeds; i++) {
				let feedSource = document.createElement('div')
				let StyleOfFeedSource = getRandomInt(1, 6)
				feedSource.classList.add('feed-source')
				if (StyleOfFeedSource === 1) {
					feedSource.classList.add('source1')
				} else if (StyleOfFeedSource === 2) {
					feedSource.classList.add('source2')
				} else if (StyleOfFeedSource === 3) {
					feedSource.classList.add('source3')
				} else if (StyleOfFeedSource === 4) {
					feedSource.classList.add('source4')
				} else if (StyleOfFeedSource === 5) {
					feedSource.classList.add('source5')
				}
				feeds[x].append(feedSource)
			}
		}
	}
}
const createTopics = () => {
	let amountOfTopics = getRandomInt(80, 200)
	console.log(`create ${amountOfTopics} Topics`)
	let topics = document.querySelectorAll('[data-id=topic]')
	if (topics) {
		for (let x = 0; x < topics.length; x++) {
			for (let i = 0; i < amountOfTopics; i++) {
				let topic = document.createElement('div')
				topic.classList.add('topic-source')
				let StyleOfTopic = getRandomInt(1, 5)
				if (StyleOfTopic === 1) {
					topic.classList.add('source1')
				} else if (StyleOfTopic === 2) {
					topic.classList.add('source2')
				} else if (StyleOfTopic === 3) {
					topic.classList.add('source3')
				} else if (StyleOfTopic === 4) {
					topic.classList.add('source4')
				} else if (StyleOfTopic === 5) {
					topic.classList.add('source5')
				}
				topics[x].append(topic)
			}
		}
	}
}

const createInformationContent = () => {
	let amountOfInformation = getRandomInt(80, 200)
	console.log(`create ${amountOfInformation} InformationContent`)
	let informations = document.querySelectorAll('[data-id=information]')
	if (informations) {
		for (let x = 0; x < informations.length; x++) {
			for (let i = 0; i < amountOfInformation; i++) {
				let information = document.createElement('div')
				information.classList.add('information-source')
				let StyleOfInformation = getRandomInt(1, 5)
				if (StyleOfInformation === 1) {
					information.classList.add('source1')
				} else if (StyleOfInformation === 2) {
					information.classList.add('source2')
				} else if (StyleOfInformation === 3) {
					information.classList.add('source3')
				} else if (StyleOfInformation === 4) {
					information.classList.add('source4')
				} else if (StyleOfInformation === 5) {
					information.classList.add('source5')
				}
				informations[x].append(information)
			}
		}
	}
}

const start = () => {
	createFeeds()
	createTopics()
	createInformationContent()
}
start()
