"""Send Tezcode group: landing link + voting poll."""
import json
import urllib.request

BOT_TOKEN = "8499879884:AAH8jOj8IQkoDGGTutmL6Hp8SHXghqFsUfU"
CHAT_ID = "-1002640882371"
BASE = f"https://api.telegram.org/bot{BOT_TOKEN}"


def post(method, payload):
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        f"{BASE}/{method}",
        data=data,
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())


# 1) Send link with rich announcement
msg_text = (
    "🚀 *Tezcode landing page — LIVE*\n\n"
    "5 til (UZ/RU/EN/AR/UK) · 14 ta jamoa · 8 ta mahsulot · 6 ta yo'nalish\n\n"
    "✨ Yangiliklar:\n"
    "• Hero parallax + gradient mesh + magnetic CTA\n"
    "• LiveCodeDemo terminal — AI engineering animatsiya\n"
    "• TechStackMarquee (15 ta tech)\n"
    "• 6 ta TezCode bo'lim (Systems / Custom / AI / Teams / Labs / Academy)\n"
    "• 4 qadam jarayon\n"
    "• 14 a'zo jamoa card\n"
    "• Form → shu guruhga keladi (Telegram bot)\n\n"
    "🌐 https://tezcode-landing-production.up.railway.app\n"
    "📦 https://github.com/AI-automatization/tezcode-landing"
)

r1 = post(
    "sendMessage",
    {
        "chat_id": CHAT_ID,
        "text": msg_text,
        "parse_mode": "Markdown",
        "disable_web_page_preview": False,
    },
)
print("sendMessage:", r1.get("ok"), "msg_id:", r1.get("result", {}).get("message_id"))

# 2) Send voting poll
r2 = post(
    "sendPoll",
    {
        "chat_id": CHAT_ID,
        "question": "Landing page yoqdimi?",
        "options": json.dumps(["Xa", "Yo'q"]),
        "is_anonymous": False,
        "allows_multiple_answers": False,
        "type": "regular",
    },
)
print("sendPoll:", r2.get("ok"), "msg_id:", r2.get("result", {}).get("message_id"))
if not r2.get("ok"):
    print("ERROR:", r2)
