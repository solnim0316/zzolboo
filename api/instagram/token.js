// 📸 인스타그램 토큰 교환 API (Netlify Functions 예시)
// 실제 배포시에는 Netlify Functions, Vercel API Routes, 또는 별도 백엔드 서버 필요

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { code } = req.body;
    
    // 인스타그램 API로 토큰 교환 요청
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.VITE_INSTAGRAM_APP_ID,
        client_secret: process.env.INSTAGRAM_APP_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: process.env.VITE_INSTAGRAM_REDIRECT_URI,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.access_token) {
      // 단기 토큰을 장기 토큰으로 교환
      const longTermResponse = await fetch(
        `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_APP_SECRET}&access_token=${tokenData.access_token}`
      );

      const longTermData = await longTermResponse.json();

      return res.status(200).json({
        access_token: longTermData.access_token,
        expires_in: longTermData.expires_in,
      });
    } else {
      return res.status(400).json({ error: tokenData.error_description || 'Token exchange failed' });
    }
  } catch (error) {
    console.error('Instagram token exchange error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
