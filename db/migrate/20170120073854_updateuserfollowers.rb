class Updateuserfollowers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :followers
    add_column :users, :followers, :integer, array: true
  end
end
