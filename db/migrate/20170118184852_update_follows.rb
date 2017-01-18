class UpdateFollows < ActiveRecord::Migration[5.0]
  def change
    remove_column :follows, :user_id
    add_column :follows, :followee_id, :integer, null: false
  end
end
