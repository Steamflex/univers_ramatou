const cartes = [
  {
    id: "lettre",
    titre: "💌 Lettre d’amour",
    description: "Un petit mot qui vient du fond du cœur...",
    popupTitle: "Pour toi, ma Princesse 💙",
    popupContent: `
      <div style="
        font-family: 'Segoe Script', cursive;
        font-size: 1.2em;
        background: #fffaf3;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        line-height: 1.7;
        animation: fadeIn 2s ease-in-out;
        max-height: 400px;
        overflow-y: auto;
      ">
        <style>
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
        <p>Ma Ramatou,</p>
        <p>
          Ce site est né d’une envie simple : te faire sourire, même de loin.<br/>
          Dans un monde parfois gris, tu es ma lumière, mon réconfort.
        </p>
        <p>
          Je t’écris ces lignes pour que tu n’oublies jamais combien tu comptes pour moi.<br/>
          Tu es mon repère, mon calme, ma force. Tu es la seule que j’aime dans ce monde.
        </p>
        <p>
          Peu importe la distance ou les jours difficiles : mon amour reste là, intact, fort, réel.
        </p>
        <p style="text-align: right;">— Salif </p>
      </div>
    `
  },
  {
    id: "souvenirs",
    titre: "📸 Souvenirs",
    description: "Un peu de nos moments précieux ensemble",
    popupTitle: "Nos plus beaux souvenirs...💖",
    popupContent: `
      <style>
        .photo-polaroid {
          background: white;
          padding: 10px 10px 30px 10px;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          width: 100%;
          max-width: 200px;
          position: relative;
          transition: transform 0.3s;
        }
        .photo-polaroid:hover {
          transform: scale(1.03);
        }
        .photo-polaroid img {
          border-radius: 10px;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .photo-caption {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Segoe Script', cursive;
          font-size: 0.9em;
          color: #333;
          background: rgba(255, 255, 200, 0.8);
          padding: 5px 10px;
          border-radius: 6px;
          max-width: 90%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
      </style>

      <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;">
        <div class="photo-polaroid">
          <img src="images/photo1.jpg" alt="Souvenir 1" />
          <div class="photo-caption">Ce jour-là, j’ai su que rien ne serait plus comme avant 🌚</div>
        </div>

        <div class="photo-polaroid">
          <img src="images/photo2.jpg" alt="Souvenir 2" />
          <div class="photo-caption">🥲</div>
        </div>

        <div class="photo-polaroid">
          <img src="images/photo3.jpg" alt="Souvenir 3" />
          <div class="photo-caption">Ramatou Je t'aime ❤️</div>
        </div>

        <div class="photo-polaroid">
          <img src="images/photo4.jpg" alt="Souvenir 4" />
          <div class="photo-caption">Je ne te l’ai jamais dit, mais j’ai trop aimé ce moment 🤦‍♂️</div>
        </div>
      </div>
    `
  },
  {
    id: "pensée",
    titre: "💭 Pensée de la semaine",
    description: "Un message unique rien que pour toi",
    popupTitle: "📝 Mon petit journal pour toi",
    popupContent: `
      <style>
        .journal-container {
          background: #fff7f8;
          border-radius: 20px;
          padding: 30px;
          max-width: 520px;
          margin: auto;
          font-family: 'Segoe Script', cursive;
          color: #6b3a4a;
          font-size: 1.2em;
          line-height: 1.7;
          box-shadow: 0 12px 30px rgba(107, 58, 74, 0.3);
          position: relative;
          overflow-y: auto;
          max-height: 440px;
        }
        .post-it {
          background: #fff0f3cc;
          border-radius: 15px;
          box-shadow: 5px 7px 15px rgba(0,0,0,0.1);
          padding: 22px;
          margin-bottom: 28px;
          position: relative;
          font-size: 1.15em;
          font-family: 'Segoe Script', cursive;
          color: #523340;
          line-height: 1.55;
          cursor: default;
          user-select: text;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .post-it:hover {
          transform: scale(1.05);
          box-shadow: 7px 10px 22px rgba(0,0,0,0.18);
        }
        .sticker {
          position: absolute;
          font-size: 2em;
          user-select: none;
          opacity: 0.75;
        }
        .sticker.heart { top: 12px; right: 22px; color: #ff5273; }
        .sticker.star { bottom: 18px; left: 18px; color: #f5d25e; }
        .sticker.feather { top: 45px; left: 45px; color: #8fbee4; }
        @media (max-width: 600px) {
          .journal-container {
            font-size: 1em;
            padding: 20px;
            max-height: 370px;
          }
          .post-it {
            font-size: 1em;
            padding: 18px;
          }
        }
      </style>
      <div class="journal-container">
        <div class="post-it">
          Ma douce Princesse,'des fois'<br/>
          Chaque jour loin de toi, fais augmenté mon amour pour toi.<br/>
          Ta présence me manque, mais ton amour me porte.<br/>
          Tu es mon bb à moi, ma force, mon amo...bon j'arrête, après tu vas dire que c'est mignon😂<br/>
          <div class="sticker heart">❤️</div>
        </div>
        <div class="post-it">
          Peu importe les obstacles, rien ne pourra changer ce que je ressens pour toi.<br/>
          Reste forte, ma princesse, je suis toujours là, avec toi, pour toi.<br/>
          Je t’aime plus que jamais.<br/>
        </div>
      </div>
    `
  }
];
