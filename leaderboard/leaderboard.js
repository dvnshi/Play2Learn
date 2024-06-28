document.addEventListener('DOMContentLoaded', () => {
    const leaderboard = document.querySelector('.leaderboard');

    const players = [
        { rank: 1, name: 'Player One', score: 1200, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { rank: 2, name: 'Player Two', score: 1100, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { rank: 3, name: 'Player Three', score: 1050, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { rank: 4, name: 'Player Four', score: 1000, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { rank: 5, name: 'Player Five', score: 950, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    ];

    players.forEach(player => {
        const entry = document.createElement('div');
        entry.classList.add('entry');

        entry.innerHTML = `
            <div class="rank">${player.rank}</div>
            <div class="player-info">
                <img src="${player.avatar}" alt="Avatar" class="avatar">
                <span class="name">${player.name}</span>
            </div>
            <div class="score">${player.score}</div>
        `;

        leaderboard.appendChild(entry);
    });

    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', () => {
        // Add your back navigation logic here
        // alert('Back button clicked!');
    });
});
