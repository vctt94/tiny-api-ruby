class CreateSiteParseds < ActiveRecord::Migration[5.0]
  def change
    create_table :site_parseds do |t|
      t.text :url
      t.text :a
      t.text :h1
      t.text :h2
      t.text :h3

      t.timestamps
    end
  end
end
