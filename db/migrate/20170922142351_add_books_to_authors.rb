class AddBooksToAuthors < ActiveRecord::Migration[5.1]
  def change
    add_foreign_key :books, :authors
  end
end
