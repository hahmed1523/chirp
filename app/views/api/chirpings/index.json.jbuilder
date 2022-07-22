json.array! @chirps do |chirp|
    json.partial! 'api/chirpings/chirp', chirp: chirp 
end