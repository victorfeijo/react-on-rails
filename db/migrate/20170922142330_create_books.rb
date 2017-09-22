class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :description
      t.string :image_url
      t.integer :author_id

      t.timestamps
    end
  end
end
