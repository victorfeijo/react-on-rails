class BooksController < ApplicationController
  def index
    @books = Book.joins(:author).select(:id,
                                        :title,
                                        :description,
                                        :image_url,
                                        :created_at,
                                        'authors.name as author_name')
  end
end
