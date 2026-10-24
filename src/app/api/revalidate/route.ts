import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json(
      { message: "Invalid or missing secret" },
      { status: 401 }
    );
  }

  try {
    // Invalidate cached WordPress REST fetch calls tagged with "blog"
    revalidateTag("blog");

    // Invalidate blog listing and single page routes across regions
    revalidatePath("/blog");
    revalidatePath("/(au)/blog");
    revalidatePath("/us/blog");
    revalidatePath("/ca/blog");
    revalidatePath("/nz/blog");

    return NextResponse.json({
      revalidated: true,
      tag: "blog",
      now: Date.now(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error revalidating", error: err?.message || String(err) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  return GET(request);
}

