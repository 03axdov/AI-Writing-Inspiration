import os
from pathlib import Path
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv(Path(__file__).resolve().parent / ".env")
client = OpenAI(api_key=os.environ["OPENAI_SECRET_KEY"], organization="org-sw06U104gUA9DTFqfUM3LmVu")

def test_text():
    response = client.responses.create(
        model="gpt-5-nano",
        input="Say something."
    )

    print(response.output_text)


def test_image_generation():
    import base64

    prompt = """
    A children's book drawing of a veterinarian using a stethoscope to 
    listen to the heartbeat of a baby otter.
    """

    result = client.images.generate(
        model="gpt-image-1",
        prompt=prompt
    )

    image_base64 = result.data[0].b64_json
    image_bytes = base64.b64decode(image_base64)

    # Save the image to a file
    with open("otter.png", "wb") as f:
        f.write(image_bytes)


if __name__ == "__main__":
    test_image_generation()