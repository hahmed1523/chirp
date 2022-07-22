class CreateChirpings < ActiveRecord::Migration[5.2]
  def change
    create_table :chirpings do |t|
      t.text :body, null: false 
      t.integer :author_id, null: false 

      t.timestamps
    end

    add_index :chirpings, :author_id
  end
end
