import unittest
from unexpected import get_sqrt, divide

class TestUnexpected(unittest.TestCase):
  def test_get_sqrt(self):
    # 1. Test normal execution
    self.assertEqual(get_sqrt(144), 12)

    # 2. Test negative input raises ValueError
    with self.assertRaises(ValueError):
      get_sqrt(-1)

  def test_divide(self):
    # 1. Test normal execution
    self.assertEqual(divide(144, 12), 12)

    with self.assertRaises(ZeroDivisionError):
      divide(1, 0)

if __name__ == '__main__':
  unittest.main()