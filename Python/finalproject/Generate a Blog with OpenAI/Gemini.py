import os
from google import genai
from dotenv import dotenv_values

# 1. Load the environment variables from your secret .env file
config = dotenv_values(".env")

# 2. Extract the key using the variable name we created inside the .env file
SECRET_KEY = config.get("GEMINI_API_KEY")

# 3. Pass the hidden key straight to the Gemini client
client = genai.Client(api_key="YOUR_OPENAI_API_KEY_HERE")

def generate_blog(paragraph_topic):
    # 4. Call the Gemini 2.5 Flash model (great for text generation)
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents='Write a paragraph about the following topic: ' + paragraph_topic,
    )
    
    # 5. Return the generated text
    return response.text

# 6. Call the function and print the result to your terminal
print("--- Running Secure Test ---")
blog_result = generate_blog('Why NYC is better than your city.')
print(blog_result)
print("\n" + "="*40 + "\n")


# Multiple Paragraphs
keep_writing = True
while keep_writing:
    answer = input('Write another paragraph? Y for yes, anything else for no: ').strip().upper()
    
    if answer == 'Y':
        paragraph_topic = input('What should this paragraph talk about? ')
        print("\nGenerating...")
        print(generate_blog(paragraph_topic))
        print("\n" + "="*40 + "\n")
    else:
        print("Goodbye!")
        keep_writing = False