// 门中随机选曲
const PURPLE_GATE_TRACK1_POOL = [
    { id: '328', name: '言ノ葉カルマ' },
    { id: '403', name: '悪戯' },
    { id: '457', name: '言ノ葉遊戯' },
    { id: '458', name: 'りばーぶ' },
    { id: '532', name: '洗脳' },
    { id: '533', name: 'Barbed Eye' },
    { id: '559', name: '空威張りビヘイビア' },
    { id: '568', name: '分からない' },
    { id: '613', name: '天国と地獄 -言ノ葉リンネ-' },
    { id: '626', name: '相思創愛' },
    { id: '673', name: '咲キ誇レ常世ノ華' }
];
const PURPLE_GATE_TRACK2_POOL = [
    { id: '11001', name: 'BLACK ROSE' },
    { id: '11002', name: 'Secret Sleuth' },
    { id: '11104', name: 'ヤミツキ' },
    { id: '11105', name: 'ワードワードワード' },
    { id: '11168', name: 'シアトリカル・ケース' },
    { id: '11169', name: 'ステップアンドライム' },
    { id: '11170', name: '届かない花束' },
    { id: '11365', name: 'アンビバレンス' },
    { id: '11380', name: 'パーフェクション' },
    { id: '11381', name: 'デーモンベット' },
    { id: '11456', name: '分解収束テイル' },
    { id: '11532', name: 'ヱデン' },
    { id: '11533', name: 'にゃーにゃー冒険譚' },
    { id: '11613', name: 'Mystic Parade' },
    { id: '11614', name: 'Cry Cry Cry' },
    { id: '11747', name: '地獄' },
    { id: '11748', name: 'シスターシスター' }
];
const PURPLE_GATE_TRACK3_FIXED = { id: '11749', name: '有明/Ariake' };
const purpleGateChallengeById = Object.fromEntries([
    ...PURPLE_GATE_TRACK1_POOL.map(s => [s.id, s]),
    ...PURPLE_GATE_TRACK2_POOL.map(s => [s.id, s]),
    [PURPLE_GATE_TRACK3_FIXED.id, PURPLE_GATE_TRACK3_FIXED]
]);

// 钥匙要求曲目 28首（版本 GreeN/ORANGE/PiNK 等转换为舞萌年份）
const songs = [
    { id: '328', name: '言ノ葉カルマ', version: '舞萌 2020', difficulty: '13.4' },
    { id: '403', name: '悪戯', version: '舞萌 2021', difficulty: '12.9' },
    { id: '457', name: '言ノ葉遊戯', version: '舞萌 2022', difficulty: '12.7' },
    { id: '458', name: 'りばーぶ', version: '舞萌 2022', difficulty: '11.0' },
    { id: '532', name: '洗脳', version: '舞萌 2022', difficulty: '12.9' },
    { id: '533', name: 'Barbed Eye', version: '舞萌 2022', difficulty: '13.0' },
    { id: '559', name: '空威張りビヘイビア', version: '舞萌 2023', difficulty: '13.7' },
    { id: '568', name: '分からない', version: '舞萌 2023', difficulty: '14.0' },
    { id: '613', name: '天国と地獄 -言ノ葉リンネ-', version: '舞萌 2023', difficulty: '13.3' },
    { id: '626', name: '相思創愛', version: '舞萌 2023', difficulty: '13.5' },
    { id: '673', name: '咲キ誇レ常世ノ華', version: '舞萌 2024', difficulty: '13.5' },
    { id: '11001', name: 'BLACK ROSE', version: '舞萌 2020', difficulty: '12.2' },
    { id: '11002', name: 'Secret Sleuth', version: '舞萌 2020', difficulty: '13.8' },
    { id: '11104', name: 'ヤミツキ', version: '舞萌 2021', difficulty: '12.7' },
    { id: '11105', name: 'ワードワードワード', version: '舞萌 2021', difficulty: '13.4' },
    { id: '11168', name: 'シアトリカル・ケース', version: '舞萌 2022', difficulty: '12.8' },
    { id: '11169', name: 'ステップアンドライム', version: '舞萌 2022', difficulty: '12.8' },
    { id: '11170', name: '届かない花束', version: '舞萌 2022', difficulty: '13.1' },
    { id: '11365', name: 'アンビバレンス', version: '舞萌 2023', difficulty: '13.0' },
    { id: '11380', name: 'パーフェクション', version: '舞萌 2023', difficulty: '13.4' },
    { id: '11381', name: 'デーモンベット', version: '舞萌 2023', difficulty: '13.2' },
    { id: '11456', name: '分解収束テイル', version: '舞萌 2024', difficulty: '13.7' },
    { id: '11532', name: 'ヱデン', version: '舞萌 2024', difficulty: '12.8' },
    { id: '11533', name: 'にゃーにゃー冒険譚', version: '舞萌 2024', difficulty: '13.7' },
    { id: '11613', name: 'Mystic Parade', version: '舞萌 2025', difficulty: '13.5' },
    { id: '11614', name: 'Cry Cry Cry', version: '舞萌 2025', difficulty: '13.8' },
    { id: '11747', name: '地獄', version: '舞萌 2025', difficulty: '13.6' },
    { id: '11748', name: 'シスターシスター', version: '舞萌 2025', difficulty: '13.2' }
];
const songsById = Object.fromEntries(songs.map(s => [s.id, s]));

// 区域开放时间 2026/03/25 10:00:00 (UTC+8 北京时间)
const OPEN_TIME = new Date('2026-03-25T10:00:00+08:00');

const noCoverSvg = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22%3E%3Crect fill=%22%23ddd%22 width=%2280%22 height=%2280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2210%22%3E%E6%9A%82%E6%97%A0%E6%9B%B2%E7%BB%98%3C/text%3E%3C/svg%3E";

function loadProgress() {
    const saved = localStorage.getItem('maimai-purple-gate-progress');
    const defaultSoloMulti = { solo: { run: [], completed: {} }, multi: { run: [], completed: {} } };
    if (saved) {
        try {
            const p = JSON.parse(saved);
            return {
                solo: p.solo && Array.isArray(p.solo.run) ? p.solo : { run: [], completed: {} },
                multi: p.multi && Array.isArray(p.multi.run) ? p.multi : { run: [], completed: {} }
            };
        } catch (e) {}
    }
    return defaultSoloMulti;
}

function saveProgress(progress) {
    localStorage.setItem('maimai-purple-gate-progress', JSON.stringify(progress));
}

let progress = loadProgress();

function updateCountdown() {
    const now = new Date();
    const section = document.getElementById('countdown-section');
    const titleEl = document.querySelector('#countdown-section .countdown-title');
    const noteEl = document.querySelector('#countdown-section .countdown-note');
    const displayEl = document.getElementById('countdown-display');
    const statusEl = document.getElementById('countdown-status');

    if (now >= OPEN_TIME) {
        if (section) section.classList.add('open');
        if (titleEl) titleEl.textContent = '区域已开放';
        if (noteEl) noteEl.style.display = 'none';
        if (displayEl) displayEl.style.display = 'none';
        if (statusEl) {
            statusEl.textContent = '✅ 区域已开放！';
            statusEl.className = 'countdown-status open';
        }
        return;
    }

    const diff = OPEN_TIME - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-days').textContent = String(d).padStart(2, '0');
    document.getElementById('countdown-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = String(s).padStart(2, '0');

    if (section) section.classList.remove('open');
    if (titleEl) titleEl.textContent = '区域开放倒计时';
    if (noteEl) noteEl.style.display = '';
    if (displayEl) displayEl.style.display = '';
    if (statusEl) {
        statusEl.textContent = '⏳ 区域尚未开放';
        statusEl.className = 'countdown-status closed';
    }
}

let purpleGateChallengeRun = [];

function randomPickPurpleGateChallenge() {
    const t1 = PURPLE_GATE_TRACK1_POOL[Math.floor(Math.random() * PURPLE_GATE_TRACK1_POOL.length)];
    const t2 = PURPLE_GATE_TRACK2_POOL[Math.floor(Math.random() * PURPLE_GATE_TRACK2_POOL.length)];
    return [t1.id, t2.id, PURPLE_GATE_TRACK3_FIXED.id];
}

function renderPurpleGateChallengeRun() {
    const track1El = document.getElementById('gate-track1-songs');
    const track2El = document.getElementById('gate-track2-songs');
    const track3El = document.getElementById('gate-track3-songs');
    if (!track1El || !track2El || !track3El) return;

    const selected1 = purpleGateChallengeRun[0] || null;
    const selected2 = purpleGateChallengeRun[1] || null;

    function renderTrack(pool, selectedId) {
        return pool.map(s => {
            const isSelected = s.id === selectedId;
            const coverUrl = `https://assets.awmc.cc/covers/${s.id}.png`;
            return `
                <div class="gate-song-chip expandable ${isSelected ? 'selected' : ''}" data-id="${s.id}">
                    <div class="gate-chip-cover">
                        <img src="${coverUrl}" alt="${s.name}" onerror="this.src='${noCoverSvg}'">
                    </div>
                    <span class="gate-chip-name">${s.name}</span>
                </div>
            `;
        }).join('');
    }

    track1El.innerHTML = renderTrack(PURPLE_GATE_TRACK1_POOL, selected1);
    track2El.innerHTML = renderTrack(PURPLE_GATE_TRACK2_POOL, selected2);
    track3El.innerHTML = `
        <div class="gate-song-chip expandable selected" data-id="${PURPLE_GATE_TRACK3_FIXED.id}">
            <div class="gate-chip-cover">
                <img src="https://assets.awmc.cc/covers/${PURPLE_GATE_TRACK3_FIXED.id}.png" alt="${PURPLE_GATE_TRACK3_FIXED.name}" onerror="this.src='${noCoverSvg}'">
            </div>
            <span class="gate-chip-name">${PURPLE_GATE_TRACK3_FIXED.name}</span>
        </div>
    `;
}

function initPurpleGateChallengeSection() {
    const expanded = localStorage.getItem('purple-gate-challenge-expanded') === 'true';
    const body = document.getElementById('gate-challenge-body');
    const toggle = document.getElementById('gate-challenge-toggle');
    const icon = toggle?.querySelector('.toggle-icon');
    const text = toggle?.querySelector('.toggle-text');

    function setExpanded(exp) {
        if (body) body.style.display = exp ? 'block' : 'none';
        if (toggle) toggle.setAttribute('aria-expanded', String(exp));
        if (icon) icon.textContent = exp ? '▲' : '▼';
        if (text) text.textContent = exp ? '收起' : '展开';
        localStorage.setItem('purple-gate-challenge-expanded', String(exp));
    }

    setExpanded(expanded);

    toggle?.addEventListener('click', () => {
        const cur = localStorage.getItem('purple-gate-challenge-expanded') === 'true';
        setExpanded(!cur);
    });
}

// 从 28 首钥匙曲目中随机抽取
function randomPickPurple(n) {
    const shuffled = [...songs].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n).map(s => s.id);
}

// 随机推荐 - 单人
function doSoloRandom() {
    if (!progress.solo) progress.solo = { run: [], completed: {} };
    progress.solo.run = randomPickPurple(3);
    progress.solo.completed = {};
    saveProgress(progress);
    renderSoloRun();
}

// 随机推荐 - 双人
function doMultiRandom() {
    if (!progress.multi) progress.multi = { run: [], completed: {} };
    progress.multi.run = randomPickPurple(4);
    progress.multi.completed = {};
    saveProgress(progress);
    renderMultiRun();
}

// 添加到单人（最多3首，不可重复）
function addToSolo(songId) {
    if (!progress.solo) progress.solo = { run: [], completed: {} };
    const run = progress.solo.run;
    if (run.includes(songId)) {
        alert('该曲目已在单人游玩列表中');
        return;
    }
    if (run.length >= 3) {
        alert('单人游玩列表已满（最多3首），请先清空或使用随机推荐重新选择');
        return;
    }
    progress.solo.run.push(songId);
    saveProgress(progress);
    renderSoloRun();
}

// 添加到双人（最多4首，不可重复）
function addToMulti(songId) {
    if (!progress.multi) progress.multi = { run: [], completed: {} };
    const run = progress.multi.run;
    if (run.includes(songId)) {
        alert('该曲目已在双人游玩列表中');
        return;
    }
    if (run.length >= 4) {
        alert('双人游玩列表已满（最多4首），请先清空或使用随机推荐重新选择');
        return;
    }
    progress.multi.run.push(songId);
    saveProgress(progress);
    renderMultiRun();
}

// 从单人/双人列表中移除曲目
function removeFromRun(mode, songId) {
    if (!progress[mode]) return;
    progress[mode].run = progress[mode].run.filter(id => id !== songId);
    delete progress[mode].completed[songId];
    saveProgress(progress);
    if (mode === 'solo') renderSoloRun();
    else renderMultiRun();
}

// 渲染单人游玩曲目
function renderSoloRun() {
    const placeholder = document.getElementById('solo-placeholder');
    const list = document.getElementById('solo-run-list');
    if (!placeholder || !list) return;
    const run = (progress.solo && progress.solo.run) || [];
    if (run.length === 0) {
        placeholder.style.display = 'block';
        list.innerHTML = '';
        return;
    }
    placeholder.style.display = 'none';
    list.innerHTML = run.map(id => {
        const song = songsById[id];
        if (!song) return '';
        const coverUrl = `https://assets.awmc.cc/covers/${id}.png`;
        return `
            <div class="run-song-card" data-song-id="${id}" data-mode="solo">
                <div class="song-cover">
                    <img src="${coverUrl}" alt="${song.name}" onerror="this.src='${noCoverSvg}'">
                </div>
                <div class="song-info">
                    <div class="song-name">${song.name}</div>
                    <div class="song-details">
                        <span>ID: ${id}</span>
                        <span>${song.version}</span>
                        <span>难度: ${song.difficulty}</span>
                    </div>
                    <button class="btn-remove" data-remove="solo" data-song-id="${id}" data-umami-event="run-remove-solo-purple" data-umami-event-song-id="${id}" title="移除此曲目">×</button>
                </div>
            </div>
        `;
    }).join('');
    list.querySelectorAll('[data-remove="solo"]').forEach(btn => {
        btn.addEventListener('click', () => removeFromRun('solo', btn.dataset.songId));
    });
}

// 渲染双人游玩曲目
function renderMultiRun() {
    const placeholder = document.getElementById('multi-placeholder');
    const list = document.getElementById('multi-run-list');
    if (!placeholder || !list) return;
    const run = (progress.multi && progress.multi.run) || [];
    if (run.length === 0) {
        placeholder.style.display = 'block';
        list.innerHTML = '';
        return;
    }
    placeholder.style.display = 'none';
    list.innerHTML = run.map(id => {
        const song = songsById[id];
        if (!song) return '';
        const coverUrl = `https://assets.awmc.cc/covers/${id}.png`;
        return `
            <div class="run-song-card" data-song-id="${id}" data-mode="multi">
                <div class="song-cover">
                    <img src="${coverUrl}" alt="${song.name}" onerror="this.src='${noCoverSvg}'">
                </div>
                <div class="song-info">
                    <div class="song-name">${song.name}</div>
                    <div class="song-details">
                        <span>ID: ${id}</span>
                        <span>${song.version}</span>
                        <span>难度: ${song.difficulty}</span>
                    </div>
                    <button class="btn-remove" data-remove="multi" data-song-id="${id}" data-umami-event="run-remove-multi-purple" data-umami-event-song-id="${id}" title="移除此曲目">×</button>
                </div>
            </div>
        `;
    }).join('');
    list.querySelectorAll('[data-remove="multi"]').forEach(btn => {
        btn.addEventListener('click', () => removeFromRun('multi', btn.dataset.songId));
    });
}

// 渲染曲目池（可添加到单人/双人）
function renderSongsPool() {
    const list = document.getElementById('pool-songs-list');
    if (!list) return;
    list.innerHTML = songs.map(song => {
        const coverUrl = `https://assets.awmc.cc/covers/${song.id}.png`;
        return `
            <div class="pool-song-card" data-song-id="${song.id}">
                <div class="song-cover">
                    <img src="${coverUrl}" alt="${song.name}" onerror="this.src='${noCoverSvg}'">
                </div>
                <div class="song-info">
                    <div class="song-name">${song.name}</div>
                    <div class="song-details">
                        <span>ID: ${song.id}</span>
                        <span>${song.version}</span>
                        <span>难度: ${song.difficulty}</span>
                    </div>
                    <div class="pool-actions">
                        <button class="btn btn-small btn-solo" data-add-solo="${song.id}" data-umami-event="pool-add-solo-purple" data-umami-event-song-id="${song.id}" data-umami-event-song-name="${song.name.replace(/"/g, '&quot;')}">添加到单人</button>
                        <button class="btn btn-small btn-multi" data-add-multi="${song.id}" data-umami-event="pool-add-multi-purple" data-umami-event-song-id="${song.id}" data-umami-event-song-name="${song.name.replace(/"/g, '&quot;')}">添加到双人</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    list.querySelectorAll('[data-add-solo]').forEach(btn => {
        btn.addEventListener('click', () => addToSolo(btn.dataset.addSolo));
    });
    list.querySelectorAll('[data-add-multi]').forEach(btn => {
        btn.addEventListener('click', () => addToMulti(btn.dataset.addMulti));
    });
}

function initExpandClick() {
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.expandable');
        const active = document.querySelector('.expandable.expanded');
        if (target) {
            if (active && active !== target) active.classList.remove('expanded');
            target.classList.toggle('expanded');
        } else if (active) {
            active.classList.remove('expanded');
        }
    });
}

document.getElementById('reset').addEventListener('click', () => {
    if (confirm('确定要重置单人/双人列表吗？')) {
        progress = { solo: { run: [], completed: {} }, multi: { run: [], completed: {} } };
        saveProgress(progress);
        renderSoloRun();
        renderMultiRun();
    }
});

document.getElementById('export-base64').addEventListener('click', () => {
    const dataStr = JSON.stringify(progress);
    const base64 = btoa(encodeURIComponent(dataStr));
    const textarea = document.createElement('textarea');
    textarea.value = base64;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Base64 数据已复制到剪贴板！\n\n' + base64);
});

document.getElementById('import-btn').addEventListener('click', () => {
    document.getElementById('import-modal').style.display = 'flex';
    document.getElementById('import-data').value = '';
    document.getElementById('import-error').style.display = 'none';
});

document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('import-modal').style.display = 'none';
});

document.getElementById('import-cancel').addEventListener('click', () => {
    document.getElementById('import-modal').style.display = 'none';
});

document.getElementById('import-modal').addEventListener('click', (e) => {
    if (e.target.id === 'import-modal') {
        document.getElementById('import-modal').style.display = 'none';
    }
});

document.getElementById('import-confirm').addEventListener('click', () => {
    const importData = document.getElementById('import-data').value.trim();
    const errorDiv = document.getElementById('import-error');

    if (!importData) {
        errorDiv.textContent = '请输入要导入的数据';
        errorDiv.style.display = 'block';
        return;
    }

    let importedProgress = {};
    try {
        if (importData.length > 0 && !importData.startsWith('{')) {
            importedProgress = JSON.parse(decodeURIComponent(atob(importData)));
        } else {
            importedProgress = JSON.parse(importData);
        }
        if (typeof importedProgress !== 'object' || Array.isArray(importedProgress)) {
            throw new Error('数据格式不正确');
        }
        if (confirm('确定要导入数据吗？这将覆盖当前的单人/双人列表。')) {
            progress = importedProgress;
            if (!progress.solo) progress.solo = { run: [], completed: {} };
            if (!progress.multi) progress.multi = { run: [], completed: {} };
            saveProgress(progress);
            renderSoloRun();
            renderMultiRun();
            document.getElementById('import-modal').style.display = 'none';
            alert('导入成功！');
        }
    } catch (error) {
        errorDiv.textContent = '导入失败：' + error.message;
        errorDiv.style.display = 'block';
    }
});

document.getElementById('solo-random')?.addEventListener('click', doSoloRandom);
document.getElementById('multi-random')?.addEventListener('click', doMultiRandom);
document.getElementById('solo-clear')?.addEventListener('click', () => {
    if (progress.solo) {
        progress.solo.run = [];
        progress.solo.completed = {};
        saveProgress(progress);
        renderSoloRun();
    }
});
document.getElementById('multi-clear')?.addEventListener('click', () => {
    if (progress.multi) {
        progress.multi.run = [];
        progress.multi.completed = {};
        saveProgress(progress);
        renderMultiRun();
    }
});

document.getElementById('gate-random').addEventListener('click', () => {
    purpleGateChallengeRun = randomPickPurpleGateChallenge();
    renderPurpleGateChallengeRun();
    const body = document.getElementById('gate-challenge-body');
    if (body && body.style.display === 'none') {
        body.style.display = 'block';
        localStorage.setItem('purple-gate-challenge-expanded', 'true');
        const toggle = document.getElementById('gate-challenge-toggle');
        const icon = toggle?.querySelector('.toggle-icon');
        const text = toggle?.querySelector('.toggle-text');
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = '▲';
        if (text) text.textContent = '收起';
    }
});

updateCountdown();
setInterval(updateCountdown, 1000);
renderSoloRun();
renderMultiRun();
renderSongsPool();
renderPurpleGateChallengeRun();
initPurpleGateChallengeSection();
initExpandClick();
