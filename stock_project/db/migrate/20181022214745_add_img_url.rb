class AddImgUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :image_url, :string
  end
end
