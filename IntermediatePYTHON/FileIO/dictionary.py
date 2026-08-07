liked_songs = {
  #'title': 'artist',
  'Bad Habits' : 'Ed Sheeran',
  'I\'m Just Ken' : 'Ryan Gosling',
  'Mastermind' : 'Taylor Swift',
  'Uptown Funk' : 'Mark Ronson ft. Bruno Mars',
  'Ghost' : 'Justin Bieber'
}

def write_liked_songs_to_file(liked_songs, file_name):
  with open(file_name, 'w', encoding='utf-8') as file:
    file.write('Liked Songs:\n')
    for song, artist in liked_songs.items():
      file.write(f'{song} by {artist}\n')
    print(f'Successfully added Liked Songs to {file_name} ')

# Write liked songs to a .txt file
write_liked_songs_to_file(liked_songs, 'FileIO/liked_songs.txt')