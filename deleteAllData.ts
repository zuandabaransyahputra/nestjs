import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Urutkan penghapusan dari tabel yang memiliki foreign key dependency terakhir
  await prisma.post.deleteMany(); // Hapus semua data di tabel 'Post'
  // Tambahkan deleteMany untuk tabel lain sesuai kebutuhan
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
