class Updatephoto < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :liked, :boolean, default: false
    add_column :photos, :likes, :integer, default: 0
  end
end
